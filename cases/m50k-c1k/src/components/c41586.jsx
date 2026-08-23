import React from 'react';
const LABEL_41586 = 'component_41586';
export function Component41586({ value = 41586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41586, 'data-value': derived.doubled }, children);
}
export default Component41586;
