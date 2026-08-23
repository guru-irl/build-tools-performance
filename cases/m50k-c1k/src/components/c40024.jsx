import React from 'react';
const LABEL_40024 = 'component_40024';
export function Component40024({ value = 40024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40024, 'data-value': derived.doubled }, children);
}
export default Component40024;
