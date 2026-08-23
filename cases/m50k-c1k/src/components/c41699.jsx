import React from 'react';
const LABEL_41699 = 'component_41699';
export function Component41699({ value = 41699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41699, 'data-value': derived.doubled }, children);
}
export default Component41699;
