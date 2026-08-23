import React from 'react';
const LABEL_46379 = 'component_46379';
export function Component46379({ value = 46379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46379, 'data-value': derived.doubled }, children);
}
export default Component46379;
