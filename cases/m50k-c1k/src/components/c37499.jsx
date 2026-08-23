import React from 'react';
const LABEL_37499 = 'component_37499';
export function Component37499({ value = 37499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37499, 'data-value': derived.doubled }, children);
}
export default Component37499;
