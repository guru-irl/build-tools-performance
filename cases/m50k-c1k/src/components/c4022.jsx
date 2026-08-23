import React from 'react';
const LABEL_4022 = 'component_4022';
export function Component4022({ value = 4022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4022, 'data-value': derived.doubled }, children);
}
export default Component4022;
