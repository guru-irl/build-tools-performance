import React from 'react';
const LABEL_20887 = 'component_20887';
export function Component20887({ value = 20887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20887, 'data-value': derived.doubled }, children);
}
export default Component20887;
