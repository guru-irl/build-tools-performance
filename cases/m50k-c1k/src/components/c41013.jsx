import React from 'react';
const LABEL_41013 = 'component_41013';
export function Component41013({ value = 41013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41013, 'data-value': derived.doubled }, children);
}
export default Component41013;
