import React from 'react';
const LABEL_41088 = 'component_41088';
export function Component41088({ value = 41088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41088, 'data-value': derived.doubled }, children);
}
export default Component41088;
