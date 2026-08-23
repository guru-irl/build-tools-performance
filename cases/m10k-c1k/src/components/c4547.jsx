import React from 'react';
const LABEL_4547 = 'component_4547';
export function Component4547({ value = 4547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4547, 'data-value': derived.doubled }, children);
}
export default Component4547;
