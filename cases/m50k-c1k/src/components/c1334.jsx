import React from 'react';
const LABEL_1334 = 'component_1334';
export function Component1334({ value = 1334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1334, 'data-value': derived.doubled }, children);
}
export default Component1334;
