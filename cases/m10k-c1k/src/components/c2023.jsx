import React from 'react';
const LABEL_2023 = 'component_2023';
export function Component2023({ value = 2023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2023, 'data-value': derived.doubled }, children);
}
export default Component2023;
