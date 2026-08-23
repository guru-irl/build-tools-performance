import React from 'react';
const LABEL_28420 = 'component_28420';
export function Component28420({ value = 28420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28420, 'data-value': derived.doubled }, children);
}
export default Component28420;
