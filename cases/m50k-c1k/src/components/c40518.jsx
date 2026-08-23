import React from 'react';
const LABEL_40518 = 'component_40518';
export function Component40518({ value = 40518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40518, 'data-value': derived.doubled }, children);
}
export default Component40518;
