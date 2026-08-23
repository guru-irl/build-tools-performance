import React from 'react';
const LABEL_40820 = 'component_40820';
export function Component40820({ value = 40820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40820, 'data-value': derived.doubled }, children);
}
export default Component40820;
