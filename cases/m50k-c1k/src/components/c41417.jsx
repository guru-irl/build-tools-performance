import React from 'react';
const LABEL_41417 = 'component_41417';
export function Component41417({ value = 41417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41417, 'data-value': derived.doubled }, children);
}
export default Component41417;
