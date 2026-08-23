import React from 'react';
const LABEL_45067 = 'component_45067';
export function Component45067({ value = 45067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45067, 'data-value': derived.doubled }, children);
}
export default Component45067;
