import React from 'react';
const LABEL_2828 = 'component_2828';
export function Component2828({ value = 2828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2828, 'data-value': derived.doubled }, children);
}
export default Component2828;
