import React from 'react';
const LABEL_41186 = 'component_41186';
export function Component41186({ value = 41186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41186, 'data-value': derived.doubled }, children);
}
export default Component41186;
