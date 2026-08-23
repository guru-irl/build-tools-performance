import React from 'react';
const LABEL_4887 = 'component_4887';
export function Component4887({ value = 4887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4887, 'data-value': derived.doubled }, children);
}
export default Component4887;
