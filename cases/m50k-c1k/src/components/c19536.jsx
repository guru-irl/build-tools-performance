import React from 'react';
const LABEL_19536 = 'component_19536';
export function Component19536({ value = 19536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19536, 'data-value': derived.doubled }, children);
}
export default Component19536;
