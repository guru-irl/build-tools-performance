import React from 'react';
const LABEL_45088 = 'component_45088';
export function Component45088({ value = 45088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45088, 'data-value': derived.doubled }, children);
}
export default Component45088;
