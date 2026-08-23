import React from 'react';
const LABEL_22880 = 'component_22880';
export function Component22880({ value = 22880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22880, 'data-value': derived.doubled }, children);
}
export default Component22880;
