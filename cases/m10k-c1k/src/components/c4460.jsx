import React from 'react';
const LABEL_4460 = 'component_4460';
export function Component4460({ value = 4460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4460, 'data-value': derived.doubled }, children);
}
export default Component4460;
