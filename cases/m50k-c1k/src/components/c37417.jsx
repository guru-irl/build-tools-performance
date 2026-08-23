import React from 'react';
const LABEL_37417 = 'component_37417';
export function Component37417({ value = 37417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37417, 'data-value': derived.doubled }, children);
}
export default Component37417;
