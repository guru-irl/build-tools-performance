import React from 'react';
const LABEL_4143 = 'component_4143';
export function Component4143({ value = 4143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4143, 'data-value': derived.doubled }, children);
}
export default Component4143;
