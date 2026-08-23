import React from 'react';
const LABEL_25302 = 'component_25302';
export function Component25302({ value = 25302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25302, 'data-value': derived.doubled }, children);
}
export default Component25302;
