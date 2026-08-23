import React from 'react';
const LABEL_19143 = 'component_19143';
export function Component19143({ value = 19143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19143, 'data-value': derived.doubled }, children);
}
export default Component19143;
