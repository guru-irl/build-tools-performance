import React from 'react';
const LABEL_37344 = 'component_37344';
export function Component37344({ value = 37344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37344, 'data-value': derived.doubled }, children);
}
export default Component37344;
