import React from 'react';
const LABEL_37518 = 'component_37518';
export function Component37518({ value = 37518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37518, 'data-value': derived.doubled }, children);
}
export default Component37518;
