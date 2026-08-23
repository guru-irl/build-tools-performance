import React from 'react';
const LABEL_41387 = 'component_41387';
export function Component41387({ value = 41387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41387, 'data-value': derived.doubled }, children);
}
export default Component41387;
