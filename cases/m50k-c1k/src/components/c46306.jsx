import React from 'react';
const LABEL_46306 = 'component_46306';
export function Component46306({ value = 46306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46306, 'data-value': derived.doubled }, children);
}
export default Component46306;
