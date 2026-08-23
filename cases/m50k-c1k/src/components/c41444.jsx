import React from 'react';
const LABEL_41444 = 'component_41444';
export function Component41444({ value = 41444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41444, 'data-value': derived.doubled }, children);
}
export default Component41444;
