import React from 'react';
const LABEL_7349 = 'component_7349';
export function Component7349({ value = 7349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7349, 'data-value': derived.doubled }, children);
}
export default Component7349;
