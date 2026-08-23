import React from 'react';
const LABEL_19498 = 'component_19498';
export function Component19498({ value = 19498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19498, 'data-value': derived.doubled }, children);
}
export default Component19498;
