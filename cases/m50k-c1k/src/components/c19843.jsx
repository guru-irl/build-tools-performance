import React from 'react';
const LABEL_19843 = 'component_19843';
export function Component19843({ value = 19843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19843, 'data-value': derived.doubled }, children);
}
export default Component19843;
