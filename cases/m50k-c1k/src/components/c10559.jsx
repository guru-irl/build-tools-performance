import React from 'react';
const LABEL_10559 = 'component_10559';
export function Component10559({ value = 10559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10559, 'data-value': derived.doubled }, children);
}
export default Component10559;
