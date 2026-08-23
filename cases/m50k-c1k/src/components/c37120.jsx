import React from 'react';
const LABEL_37120 = 'component_37120';
export function Component37120({ value = 37120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37120, 'data-value': derived.doubled }, children);
}
export default Component37120;
