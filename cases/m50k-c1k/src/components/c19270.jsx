import React from 'react';
const LABEL_19270 = 'component_19270';
export function Component19270({ value = 19270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19270, 'data-value': derived.doubled }, children);
}
export default Component19270;
