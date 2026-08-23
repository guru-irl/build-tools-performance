import React from 'react';
const LABEL_37067 = 'component_37067';
export function Component37067({ value = 37067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37067, 'data-value': derived.doubled }, children);
}
export default Component37067;
