import React from 'react';
const LABEL_41730 = 'component_41730';
export function Component41730({ value = 41730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41730, 'data-value': derived.doubled }, children);
}
export default Component41730;
