import React from 'react';
const LABEL_460 = 'component_460';
export function Component460({ value = 460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_460, 'data-value': derived.doubled }, children);
}
export default Component460;
