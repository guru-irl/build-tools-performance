import React from 'react';
const LABEL_30887 = 'component_30887';
export function Component30887({ value = 30887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30887, 'data-value': derived.doubled }, children);
}
export default Component30887;
