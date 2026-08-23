import React from 'react';
const LABEL_4026 = 'component_4026';
export function Component4026({ value = 4026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4026, 'data-value': derived.doubled }, children);
}
export default Component4026;
