import React from 'react';
const LABEL_8679 = 'component_8679';
export function Component8679({ value = 8679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8679, 'data-value': derived.doubled }, children);
}
export default Component8679;
