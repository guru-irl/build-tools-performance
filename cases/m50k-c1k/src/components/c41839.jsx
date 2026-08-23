import React from 'react';
const LABEL_41839 = 'component_41839';
export function Component41839({ value = 41839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41839, 'data-value': derived.doubled }, children);
}
export default Component41839;
