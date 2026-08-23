import React from 'react';
const LABEL_4010 = 'component_4010';
export function Component4010({ value = 4010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4010, 'data-value': derived.doubled }, children);
}
export default Component4010;
