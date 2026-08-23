import React from 'react';
const LABEL_37598 = 'component_37598';
export function Component37598({ value = 37598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37598, 'data-value': derived.doubled }, children);
}
export default Component37598;
