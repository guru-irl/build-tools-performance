import React from 'react';
const LABEL_4406 = 'component_4406';
export function Component4406({ value = 4406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4406, 'data-value': derived.doubled }, children);
}
export default Component4406;
