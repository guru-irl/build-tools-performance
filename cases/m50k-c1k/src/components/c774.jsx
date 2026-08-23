import React from 'react';
const LABEL_774 = 'component_774';
export function Component774({ value = 774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_774, 'data-value': derived.doubled }, children);
}
export default Component774;
