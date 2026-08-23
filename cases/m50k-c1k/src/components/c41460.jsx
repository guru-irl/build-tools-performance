import React from 'react';
const LABEL_41460 = 'component_41460';
export function Component41460({ value = 41460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41460, 'data-value': derived.doubled }, children);
}
export default Component41460;
