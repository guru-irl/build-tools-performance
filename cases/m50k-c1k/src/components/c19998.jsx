import React from 'react';
const LABEL_19998 = 'component_19998';
export function Component19998({ value = 19998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19998, 'data-value': derived.doubled }, children);
}
export default Component19998;
