import React from 'react';
const LABEL_19164 = 'component_19164';
export function Component19164({ value = 19164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19164, 'data-value': derived.doubled }, children);
}
export default Component19164;
