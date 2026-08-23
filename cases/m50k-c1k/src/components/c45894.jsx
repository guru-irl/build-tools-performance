import React from 'react';
const LABEL_45894 = 'component_45894';
export function Component45894({ value = 45894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45894, 'data-value': derived.doubled }, children);
}
export default Component45894;
