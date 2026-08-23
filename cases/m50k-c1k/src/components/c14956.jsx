import React from 'react';
const LABEL_14956 = 'component_14956';
export function Component14956({ value = 14956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14956, 'data-value': derived.doubled }, children);
}
export default Component14956;
