import React from 'react';
const LABEL_23863 = 'component_23863';
export function Component23863({ value = 23863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23863, 'data-value': derived.doubled }, children);
}
export default Component23863;
