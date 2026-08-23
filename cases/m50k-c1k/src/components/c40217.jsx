import React from 'react';
const LABEL_40217 = 'component_40217';
export function Component40217({ value = 40217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40217, 'data-value': derived.doubled }, children);
}
export default Component40217;
